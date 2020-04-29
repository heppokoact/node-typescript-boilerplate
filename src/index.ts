function hello(name: string): string {
    return `Hello, ${name}!`;
}

let name: string | null = 'Taro';
console.log(hello(name));
