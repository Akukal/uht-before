(() => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            toggle.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
        });
        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    nav.classList.remove('open');
                    toggle.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    document.querySelectorAll('form.demo-form').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            if (!form.checkValidity()) { form.reportValidity(); return; }
            const msg = form.querySelector('.form-success');
            if (msg) {
                msg.classList.add('show');
                msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            form.reset();
        });
    });
})();