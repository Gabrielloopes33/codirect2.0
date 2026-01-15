// Layout isolado para remover navbar global
export default function ObrigadoSessaoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <head />
            <body className="font-sans min-h-screen antialiased">
                {children}
            </body>
        </html>
    );
}
