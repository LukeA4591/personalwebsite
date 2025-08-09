function Section({ id, title, icon: Icon, children }) {
    return (
        <section id={id} className="scroll-mt-24 py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-8 flex items-center gap-3">
                    {Icon ? <Icon className="h-6 w-6" aria-hidden /> : null}
                    <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                </div>
                {children}
            </div>
        </section>
    );
}

export default Section;