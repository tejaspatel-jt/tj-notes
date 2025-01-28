# Responsive Image Slider

This project is a responsive image slider created using pure vanilla JavaScript, without the use of any frameworks or libraries. It allows users to navigate through images with keyboard accessibility and enhanced usability features. The slider is designed to be compliant with WCAG 2.1 accessibility standards.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Accessibility Compliance](#accessibility-compliance)

## Features
- Responsive Image slider design that works on desktops, tablets, and mobile devices.
- Keyboard navigation using arrow keys.
- Clickable images to pause and resume the slideshow.
- Pagination dots that indicate the current slide.
- currently paused slide's pagination dot is displayed with play icon instead of dot.
- Accessible names and roles for all interactive elements.
- slider can be paused and resumed using space key.
- slider can handle images without captions too.

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**:
```
https://github.com/tejaspatel-jt/image-slider.git
```

2. **Navigate to the project directory**:
```
cd image-slider
```
3. **Open the `index.html` file** in your preferred web browser.

4. Ensure you have the images placed in the `assets/img/` directory as specified in the JavaScript array.

## Usage
- Use the left and right arrow keys to navigate through the slides.
- Click on an image to pause or resume the slideshow.
- Click on pagination dots to jump to a specific slide.

## Accessibility Compliance

This image slider meets several WCAG 2.1 accessibility standards:

1. **Keyboard Accessibility (SC 2.1.1)**:
- All interactive elements (buttons, pagination dots) are operable using a keyboard.
- Arrow keys allow users to navigate between slides.

2. **Accessible Names for Interactive Elements (SC 4.1.2)**:
- All buttons have `aria-label` attributes that provide descriptive names for screen readers.
- Each image has an appropriate `alt` attribute describing its content.

3. **Language Attribute (SC 3.1.1)**:
- The `<html>` element includes a `lang` attribute set to `"en"` to specify the language of the document.

4. **Pause, Stop, Hide Mechanism (SC 2.2.2)**:
- Clicking on an image pauses or resumes the automatic slideshow, allowing users to focus on a specific slide without interruption.

5. **Clear Structure and Relationships (SC 1.3.1)**:
- The slider uses semantic HTML and ARIA roles to convey structure.
- Captions are clearly associated with their respective images.

6. **Focus Management**:
- Focus is managed appropriately when slides change or when users interact with controls, ensuring that users can easily navigate through content.
