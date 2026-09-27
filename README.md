# Test Automation Suite

โครงสร้าง automated test ของโปรเจกต์นี้ ใช้ Page Object Model (POM) pattern

## โครงสร้างโฟลเดอร์ (Directory)

```
tests/
├── pages/          # Page Object classes — เก็บ locator และ action ของแต่ละหน้า
│   ├── BasePage.js
│   └── LoginPage.js
├── tests/          # test cases จริง (ไฟล์ .spec.js)
│   └── surnfund-web
│       // Domains, Modules
│       └── 001-register-flow
│           // Features
│           └── 001-register-supporter.spec.js
│           └── 002-register-creator.spec.js
│       └── 002-creator-project
│           // Features
│           └── 001-create-project-spec.js
│           └── 002-update-project-spec.js
│           └── 003-delete-project-spec.js
│   ├── surnfund-web-e2e
│        // journey-based
│       └── 001-project-management.spec.ts 
│   ├── backoffice
│   └── backoffice-e2e
├── utils/          # helper functions, test data, fixtures
└── config/         # ไฟล์ config ของ test runner (เช่น playwright.config.js)
```

## แนวคิดหลักของ POM

- **Page Object (`pages/`)** — 1 ไฟล์ต่อ 1 หน้า/1 component เก็บเฉพาะ locator และ method ที่ทำ action บนหน้านั้น (เช่น `login()`, `clickSubmit()`) ห้ามเขียน assertion ในไฟล์นี้
- **Test file (`tests/`)** — เรียกใช้ Page Object เพื่อทำ flow และเขียน assertion ที่นี่เท่านั้น
- **BasePage** — คลาสแม่ที่ page object อื่นๆ extend มา เก็บ method ที่ใช้ร่วมกัน เช่น `goto()`, `waitForLoad()`

## วิธีติดตั้ง

```bash
npm install
```

## วิธีรัน test

```bash
npm test                    # รันทั้งหมด
npm test -- login.spec.js   # รันเฉพาะไฟล์
```

## Naming convention

| ประเภท | รูปแบบ | ตัวอย่าง |
|---|---|---|
| Page Object | PascalCase + Page | `LoginPage.js` |
| Test file (File name > tescases, modules) | kebab-case + .spec | `001-login.spec.js` |
| Variable > Scalar, Object, arrow function | `camelCase` | `const foo = 'bar';`, `const isTrue = true`, `const isOdd = (n) => { return n%2 === 1;}` |
| Variable > Array | make it plural | `const users = ['a','b','c']` |
| class, namespace, interface, type | `PasCalCase` | `class UserManager`, `namespace UserService` |
| Tes suite | `#method` and `path of endpoint` | `#POST /api/v1/member` |
| Commit message | verb + สิ่งที่ทำ | `add login flow e2e test` |
| Branch Name | feature/feature-name | `feature/register-supporter` |
| Branch Name with fixed | fix/feature/feature-name | `fix/feature/member-create-member` |


## วิธีเพิ่ม test ใหม่

1. สร้าง branch ใหม่จาก `main` เช่น `test/add-checkout-flow`
2. ถ้ามีหน้าใหม่ที่ยังไม่มี Page Object → สร้างไฟล์ใน `pages/` ก่อน (extend จาก `BasePage`)
3. เขียน test case ใน `tests/` โดยเรียกใช้ Page Object ที่สร้างไว้
4. รัน test ในเครื่องให้ผ่านก่อน push
5. เปิด PR เพื่อให้ CI รัน test อัตโนมัติ

## CI/CD

- ระบุ CI tool ที่ใช้ (เช่น GitHub Actions) และไฟล์ config ที่เกี่ยวข้อง เช่น `.github/workflows/test.yml`
- test จะรันอัตโนมัติเมื่อมี PR เข้า `main` และ/หรือตาม schedule ที่ตั้งไว้

## หมายเหตุ

- โครงสร้างนี้ตั้งขึ้นวันที่ <!-- ระบุวันที่ --> โดย <!-- ระบุชื่อ -->
- หากต้องการเปลี่ยนแปลงโครงสร้าง ให้เปิด PR แยกเพื่อให้ทีม (ถ้ามี) ได้รีวิวก่อน
