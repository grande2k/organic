'use strict';

export default {
	name: 'ScrollTopBtn',
	data() {
		return {
			scTimer: 0,
			scY: 0,
			pageHeight: 0,
			jump: false,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll: function () {
		  if (this.scTimer) return;
		  this.scTimer = setTimeout(() => {
			this.scY = window.scrollY;
			clearTimeout(this.scTimer);
			this.scTimer = 0;
		  }, 100);
		},
		scrollToTop (duration) {
			if (document.scrollingElement.scrollTop === 0) return;
	
			const totalScrollDistance = document.scrollingElement.scrollTop;
			let scrollY = totalScrollDistance, oldTimestamp = null;
	
			function step (newTimestamp) {
				if (oldTimestamp !== null) {
					scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
					if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
					document.scrollingElement.scrollTop = scrollY;
				}
				oldTimestamp = newTimestamp;
				window.requestAnimationFrame(step);
			}
			window.requestAnimationFrame(step);
		},
		scrollTop() {
			this.scrollToTop(700);
			this.jump = true;

			setTimeout(() => {
				this.jump = false;
			}, 700);
		}
	}
}