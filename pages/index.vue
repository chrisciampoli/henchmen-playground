<template>
  <div class="min-h-screen bg-neutral-50">
    <!-- Hero Section -->
    <header class="bg-white shadow-sm py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-6xl font-bold text-neutral-900 mb-6 animate-fade-in">
          Welcome to Henchmen Playground
        </h1>
        <p class="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building the next generation of web experiences with Nuxt 3 and our comprehensive design system.
        </p>
        <nuxt-link to="/about" class="btn-primary animate-slide-up">
          Learn More
        </nuxt-link>
      </div>
    </header>

    <!-- Features Grid -->
    <section class="py-20 bg-neutral-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-neutral-900 mb-16">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="card-hover animate-slide-up">
            <div class="text-primary-500 mb-6 text-4xl">🚀</div>
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Blazing Fast Performance</h3>
            <p class="text-neutral-600 leading-relaxed">Built on Nuxt 3, ensuring server-side rendering and optimal client-side performance with modern web standards.</p>
          </div>
          <!-- Feature 2 -->
          <div class="card-hover animate-slide-up" style="animation-delay: 0.1s;">
            <div class="text-secondary-500 mb-6 text-4xl">🎨</div>
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Design System</h3>
            <p class="text-neutral-600 leading-relaxed">Comprehensive design tokens including custom colors, typography, spacing, and components for consistent styling.</p>
          </div>
          <!-- Feature 3 -->
          <div class="card-hover animate-slide-up" style="animation-delay: 0.2s;">
            <div class="text-accent-500 mb-6 text-4xl">💻</div>
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">TypeScript Safety</h3>
            <p class="text-neutral-600 leading-relaxed">Full type checking across the stack for robust and maintainable codebases with excellent developer experience.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Design System Showcase -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-neutral-900 mb-16">Design System Showcase</h2>
        
        <!-- Color Palette -->
        <div class="mb-16">
          <h3 class="text-2xl font-semibold text-neutral-900 mb-8">Color Palette</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="card text-center">
              <div class="w-full h-16 bg-primary-500 rounded-lg mb-4"></div>
              <h4 class="font-medium text-neutral-900">Primary</h4>
              <p class="text-sm text-neutral-600">#2563eb</p>
            </div>
            <div class="card text-center">
              <div class="w-full h-16 bg-secondary-500 rounded-lg mb-4"></div>
              <h4 class="font-medium text-neutral-900">Secondary</h4>
              <p class="text-sm text-neutral-600">#22c55e</p>
            </div>
            <div class="card text-center">
              <div class="w-full h-16 bg-accent-500 rounded-lg mb-4"></div>
              <h4 class="font-medium text-neutral-900">Accent</h4>
              <p class="text-sm text-neutral-600">#d946ef</p>
            </div>
            <div class="card text-center">
              <div class="w-full h-16 bg-neutral-500 rounded-lg mb-4"></div>
              <h4 class="font-medium text-neutral-900">Neutral</h4>
              <p class="text-sm text-neutral-600">#737373</p>
            </div>
          </div>
        </div>

        <!-- Typography -->
        <div class="mb-16">
          <h3 class="text-2xl font-semibold text-neutral-900 mb-8">Typography Scale</h3>
          <div class="card space-y-4">
            <div class="text-6xl font-bold text-neutral-900">Heading 1</div>
            <div class="text-4xl font-semibold text-neutral-800">Heading 2</div>
            <div class="text-2xl font-medium text-neutral-700">Heading 3</div>
            <div class="text-lg text-neutral-600">Body Large - Lorem ipsum dolor sit amet consectetur.</div>
            <div class="text-base text-neutral-600">Body Regular - Lorem ipsum dolor sit amet consectetur adipiscing elit.</div>
            <div class="text-sm text-neutral-500">Body Small - Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</div>
          </div>
        </div>

        <!-- Components -->
        <div>
          <h3 class="text-2xl font-semibold text-neutral-900 mb-8">Component Examples</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card">
              <h4 class="text-lg font-semibold text-neutral-900 mb-4">Buttons</h4>
              <div class="space-y-4">
                <button class="btn-primary">Primary Button</button>
                <button class="btn-secondary">Secondary Button</button>
              </div>
            </div>
            <div class="card">
              <h4 class="text-lg font-semibold text-neutral-900 mb-4">Status Colors</h4>
              <div class="space-y-2">
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-success-500 rounded-full"></div>
                  <span class="text-success-700">Success State</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-warning-500 rounded-full"></div>
                  <span class="text-warning-700">Warning State</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-4 h-4 bg-error-500 rounded-full"></div>
                  <span class="text-error-700">Error State</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Client-side script for the landing page
</script>
