import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Tüm alanları doldurun" },
        { status: 400 }
      );
    }

    // Email kontrol
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Bu email zaten kayıtlı" },
        { status: 400 }
      );
    }

    // Şifre hashleme
    const hashedPassword = await bcrypt.hash(password, 10);

    // Kullanıcı oluşturma
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    return NextResponse.json(
      { message: "Kullanıcı başarıyla oluşturuldu" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}