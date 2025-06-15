
# Merge-Test Project

## Requirements

- Node.js (v16+)
- npm

## Setup

ติดตั้ง dependencies ด้วยคำสั่ง:
```bash
npm install
```

## Build

คอมไพล์ TypeScript:
```bash
npm run build
```

## Run Unit Tests

ทดสอบโปรเจกต์ด้วย Jest:
```bash
npm test
```

## Project Structure

```
merge-test/
├── src/
│   └── merge.ts         # ฟังก์ชันหลัก
├── tests/
│   └── merge.test.ts    # ชุดทดสอบด้วย Jest
├── tsconfig.json        # ตั้งค่า TypeScript
├── jest.config.js       # ตั้งค่า Jest
└── package.json         # สคริปต์และ dependencies
```


