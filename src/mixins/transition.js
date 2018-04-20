export default {
  methods: {
    beforeEnter(el) {
      el.style.height = '0px';
      el.classes = el.className.split(' ');
      el.classes.push('collapse-transition');
      el.className = el.classes.join(' ');
    },
    enter(el) {
      el.style.overflow = 'hidden';
      el.style.height = el.scrollHeight + 'px';
    },
    afterEnter(el) {
      el.classes = el.className.split(' ');
      el.classes.filter((item) => {
        return item !== 'collapse-transition'
      });
      el.className = el.classes.join(' ');

      el.style.height = null;
      el.style.overflow = null;
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
    },
    leave(el) {
      if (el.scrollHeight <= 0) {
        return;
      }

      el.classes = el.className.split(' ');
      el.classes.push('collapse-transition');
      el.className = el.classes.join(' ');

      el.style.height = 0;

    },
    afterLeave(el) {
      el.classes = el.className.split(' ');
      el.classes.filter((item) => {
        return item !== 'collapse-transition'
      });
      el.className = el.classes.join(' ');

      el.style.height = null;
      el.style.overflow = null;
    }
  }
}
