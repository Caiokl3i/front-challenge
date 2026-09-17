/**
 * Interactive Pricing Component - JavaScript
 * Handles dynamic tier calculations, yearly discount application,
 * slider background progress fill, and accessibility attributes.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const slider = document.getElementById('price-slider');
  const pageviewsCount = document.getElementById('pageviews-count');
  const priceAmount = document.getElementById('price-amount');
  const billingToggle = document.getElementById('billing-toggle');

  // Pricing Tiers Data (Frontend Mentor challenge specifications)
  const PRICING_TIERS = [
    { pageviews: '10K', monthlyPrice: 8 },
    { pageviews: '50K', monthlyPrice: 12 },
    { pageviews: '100K', monthlyPrice: 16 },
    { pageviews: '500K', monthlyPrice: 24 },
    { pageviews: '1M', monthlyPrice: 36 }
  ];

  const DISCOUNT_RATE = 0.25; // 25% discount for yearly billing

  /**
   * Updates the UI elements based on current slider position and billing toggle state.
   */
  function updatePricing() {
    const tierIndex = parseInt(slider.value, 10);
    const tier = PRICING_TIERS[tierIndex] || PRICING_TIERS[2];
    const isYearly = billingToggle.checked;

    // Calculate final price per month
    const basePrice = tier.monthlyPrice;
    const finalPrice = isYearly ? basePrice * (1 - DISCOUNT_RATE) : basePrice;

    // Format price to two decimal places
    const formattedPrice = `$${finalPrice.toFixed(2)}`;

    // Update DOM text
    pageviewsCount.textContent = tier.pageviews;
    priceAmount.textContent = formattedPrice;

    // Update slider progress bar visually
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 4;
    const percentage = ((tierIndex - min) / (max - min)) * 100;
    slider.style.setProperty('--progress', `${percentage}%`);

    // Update accessibility attributes for screen readers
    slider.setAttribute('aria-valuenow', tierIndex.toString());
    slider.setAttribute(
      'aria-valuetext',
      `${tier.pageviews} pageviews, ${formattedPrice} per month${isYearly ? ' (Yearly billing discount applied)' : ''}`
    );
  }

  // Event Listeners
  // Input event triggers continuously while dragging the slider
  slider.addEventListener('input', updatePricing);
  slider.addEventListener('change', updatePricing);

  // Change event triggers when the toggle switch is checked or unchecked
  billingToggle.addEventListener('change', updatePricing);

  // Initialize display on initial load
  updatePricing();
});
