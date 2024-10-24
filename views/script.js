document.addEventListener("DOMContentLoaded", () => {
    const text = "KrishiConnect is a digital platform designed to bring farmers and wholesalers together on a common platform. Our mission is to empower the agricultural community by making it easier for farmers to sell their produce and for wholesalers to procure fresh, high-quality crops directly from the source.\n\nWith the help of technology and data-driven insights, KrishiConnect offers a machine learning-based crop recommendation system that advises farmers on which crops to grow based on their soil type, weather conditions, and other environmental factors. This ensures optimized yield and maximum profitability for farmers while minimizing resource wastage.";
    
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 15); // Speed of typing (adjustable)
        }
    }

    typeEffect();
});
