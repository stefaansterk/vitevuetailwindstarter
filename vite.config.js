import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    })
  ]
};
