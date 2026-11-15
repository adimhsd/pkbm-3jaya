document.addEventListener('DOMContentLoaded', () => {
    // === 1. FITUR HAMBURGER MENU (KODE ANDA) ===
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.add('animate-fade-in-down');
        });

        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    } else {
        console.error("Elemen menu atau tombol tidak ditemukan.");
    }
	
	
	// Logika Slider PKBM Tri Jaya
	const track = document.getElementById('slider-track');
	const slides = track.querySelectorAll('img');
	let counter = 0;

	function nextSlide() {
		counter++;
		// Jika sudah di gambar terakhir, kembali ke awal
		if (counter >= slides.length) {
			counter = 0;
		}
		
		// Geser track
		const offset = -counter * 100;
		track.style.transform = `translateX(${offset}%)`;
	}

	// Jalankan otomatis setiap 3 detik
	setInterval(nextSlide, 3000);
	
    // === 2. FITUR ACCORDION PERPUSTAKAAN (TAMBAHAN BARU) ===
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            
            // Cek apakah item ini sudah terbuka
            const isOpen = accordionItem.classList.contains('accordion-active');

            // Menutup accordion lain yang mungkin sedang terbuka (agar rapi)
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('accordion-active');
                const content = item.querySelector('.accordion-content');
                if (content) content.style.maxHeight = null;
            });

            // Jika sebelumnya tertutup, maka buka sekarang
            if (!isOpen) {
                accordionItem.classList.add('accordion-active');
                // scrollHeight memberikan tinggi asli elemen secara dinamis
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                // Jika sudah terbuka, maka tutup
                accordionItem.classList.remove('accordion-active');
                accordionContent.style.maxHeight = null;
            }
        });
    });
});