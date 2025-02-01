### 1. **Website Concept**:
   - The website is called *Valentine*, with a playful and interactive concept where a bunny (GIF) pops up and asks, "Do you wanna be my Valentine?".
   - The user can interact by clicking **Yes** or **No**.
   - The buttons react with animations and changes in text when clicked.

### 2. **Initial Setup**:
   - **HTML**: We created a simple HTML structure with a GIF image of a bunny, a question (h1), and two buttons ("Yes" and "No").
   - **CSS**: TailwindCSS was set up to style the buttons and layout initially (you later switched to custom CSS).
   
### 3. **Interactive Behavior**:
   - We implemented an interactive system where:
     - Clicking **No**: The **Yes** button grows bigger with each click, and the **No** button's text changes with a series of funny or pleading messages (like "Why not?", "Seriously?", etc.).
     - Clicking **Yes**: The question changes to "OK, Yay!" and the **Yes** button moves to the center of the page while hiding the **No** button.
     - When the **Yes** button is clicked, a new GIF appears, changing the mood to a more happy one.

### 4. **Enhancements**:
   - **Scaling Buttons**: We added scaling behavior to the **Yes** and **No** buttons to create a more dynamic, over-exaggerated effect when clicked.
   - **Text Changes**: The text on the **No** button changes after each click to a list of phrases (like “What?”, “Please, just say YES!”, etc.).
   - **Visual Effects**: The **Yes** button grows very large after several **No** button clicks, and the **No** button shrinks smaller.

### 5. **Final Adjustments**:
   - We made the **Yes** button scale without overlapping text, ensuring the text remains readable even as the button grows.
   - The **No** button now doesn't disappear after multiple clicks, and the **Yes** button is more prominent, scaling in size while the **No** button gets smaller.
   - The button animations and scaling were adjusted for better visual appeal and interactivity.

---

### Key Features of the Final Website:
- **Interactive Bunny GIF**: The main attraction is the bunny that pops up with a question, leading to playful user interaction.
- **Dynamic Button Scaling**: The buttons grow and shrink dynamically based on clicks.
- **Funny Messages**: The **No** button cycles through multiple humorous phrases.
- **Responsive Behavior**: The layout adjusts based on interactions, and buttons are positioned well.

---

### **Learned**  
- How to manipulate **HTML, CSS, and JavaScript** dynamically.  
- How to **scale elements** while keeping the design intact.  
- How to handle **button text changes** dynamically with JavaScript.  
- How to **position elements properly** using CSS when interacting with them.  
- How to **switch images dynamically** when clicking buttons.  
