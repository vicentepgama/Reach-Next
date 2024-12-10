import { NextResponse } from 'next/server';

export function GET() {
  return fetch('https://deisishop.pythonanywhere.com/products', {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => NextResponse.json(data))
    .catch((error) => {
      return NextResponse.json(
        { error: 'Erro Detetado' },
        { status: 500 }
      );
    });
}
