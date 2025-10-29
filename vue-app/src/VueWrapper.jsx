import React, { useEffect, useRef } from 'react';
import { createApp } from 'vue';
import VueWidget from './components/VueWidget.vue';

const VueWrapper = () => {
  const vueContainer = useRef(null);
  const vueApp = useRef(null);

  useEffect(() => {
    if (vueContainer.current && !vueApp.current) {
      // Mount Vue component
      vueApp.current = createApp(VueWidget);
      vueApp.current.mount(vueContainer.current);
    }

    // Cleanup khi unmount
    return () => {
      if (vueApp.current) {
        vueApp.current.unmount();
        vueApp.current = null;
      }
    };
  }, []);

  return <div ref={vueContainer}></div>;
};

export default VueWrapper;