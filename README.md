리액트 설치 순서 
visual studio code 와 node.js를 설치후 다음과 같은 명령어를 터미널에 입력한다.

1. npx create-react-app blog
2. npm init -y
3. package.json에 다음과 같은 코드를 입력
    {
  "name": "hookpractice",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "vite": "^4.0.0",
    "@vitejs/plugin-react": "^3.0.0"
  }
}

4. npm install vite --save-dev

