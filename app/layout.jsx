export const metadata = {
  title: "99 דיגיטל · הזמנת אוכל",
  description: "הזמנת ארוחות צהריים יומית בשיתוף מעדני אבי",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
