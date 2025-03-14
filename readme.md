## 🔐 1. In-Memory KeyStore with TTL
- כיצד תבנה key-store עם זמן תפוגה (TTL) לכל מפתח?
- מה היתרונות והחסרונות של פתרון כזה מול Redis?
- מה קורה במקרה של התנגשות בזמנים או קריאה אחרי שפג תוקף?

## 💻 2. React Transaction Table
- כיצד תבנה טבלה עם סינון לפי סטטוס?
- אילו שיפורים ניתן להוסיף כדי להנגיש את הרכיב?
- איך תטפל ב-1000+ רשומות בטבלה מבחינת ביצועים?

## 🚦 3. Rate Limiter
- כיצד תייצר Rate Limiter פשוט בצד לקוח/שרת?
- האם תעדיף Token Bucket או Leaky Bucket?
- איך תוודא שיישום כזה עמיד במקביליות?

## ⚡ 4. Promise.any with Timeout
- כיצד תשלב Promise.any עם מנגנון timeout כללי?
- מה קורה אם כל ההבטחות נכשלות?
- איך תוודא שהתוצאה חוזרת בזמן הקצר ביותר האפשרי?

## 🔐 5. Security Thinking Questions
- איך תגן מפני XSS באפליקציית React?
- מה הדרך הנכונה לשמור access tokens?
- איך תבצע MFA onboarding בצורה מאובטחת?
- איך תצמצם חשיפת מפתחות קריפטוגרפיים בצד לקוח?

## 🧠 6. System Design - Secure Onboarding Flow
- עיצוב תהליך onboarding מאובטח ללקוח חדש:
  1. טופס רב-שלבי עם אימותים בצד לקוח
  2. אחסון מוצפן זמני בזיכרון
  3. תמיכה ב-MFA ואימות OTP
  4. שימוש ב-WebCrypto ליצירת מפתחות בצד לקוח
  5. העברת מידע מינימלית לשרת עם הצפנה
  6. תיעוד אירועים לצורכי audit

---
