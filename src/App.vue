<template>
  <div
    id="app"
    class="min-h-screen flex flex-col bg-gray-50 text-gray-900"
  >
    <header class="p-4 bg-white shadow-md flex justify-between items-center">
      <h1 class="text-lg md:text-2xl font-bold">
        Job Portal
      </h1>
      <nav>
        <RouterLink
          to="/"
          class="text-sm md:text-base font-medium"
        >
          Home
        </RouterLink>
      </nav>
    </header>

    <main class="flex-1 p-4 md:p-6 lg:p-8">
      <router-view />
    </main>

    <footer class="p-4 bg-gray-100 text-center text-sm text-gray-500">
      © 2025 Job Portal. All rights reserved.
    </footer>
  </div>
</template>
