export default function ShopLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>yo shop header</nav>
   
        {children}
      </section>
    )
  }