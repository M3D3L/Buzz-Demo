<template>

<body class="flex justify-center min-h-screen overflow-hidden bg-yellow">
  <div class="w-full h-full my-auto lg:w-2/3 rounded-bg bg-gray lato md:2/3 xl:w-1/2" >
    <Nuxt />
  </div>
</body>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap');

.rounded-bg{
  height: 48rem;
  @apply rounded-3xl;


}


@media only screen and (min-width: 768px) {
  .rounded-bg{
  border-radius: 120px;


}

}

</style>
