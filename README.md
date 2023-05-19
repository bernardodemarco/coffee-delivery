# Coffee Delivery

Coffee Delivery is a delivery website for a fictional coffee company that has been developed with React.js + Typescript. It is the second challenge of [Rocketseat's](https://www.rocketseat.com.br/) React.js course.

Working on this project allowed me to practice some core React.js concepts, such as the Context API, useReducer and useEffect hooks, as well as external libraries like Styled Components, React Router, React Hook Form, and Zod.

![coffee-delivery-home](https://github.com/bernardodemarco/coffee-delivery/assets/115510880/3875f2b8-f1b9-4052-935a-7bc0ff78cf9e)

## About the project

On the application's main page, users can browse the menu, select from a variety of coffee beverages, and specify the quantity.

![browse-menu](https://github.com/bernardodemarco/coffee-delivery/assets/115510880/4831d35d-a5ea-4224-aee3-7bff2930e56f)

Once the desired coffee drinks are added to the shopping cart, users can view their selections, change quantities, and delete items. Below the selected coffees, the prices for each coffee, delivery, and the total order price are displayed.

To complete the order, users need to fill out a form and select a payment method. The form includes real-time validation to ensure that it is correctly filled.

After confirming the order, users are redirected to another page that shows general information about the delivery. This is a protected route, meaning it is only accessible if users have been redirected to it.

![browsing menu](https://github.com/bernardodemarco/coffee-delivery/assets/115510880/f0b64303-8f4f-482e-98f4-00db96fc2ec4)

Once the order is completed, the coffee cart is cleared. It is worth mentioning that the cart's data is stored in local storage and the web application's layout is fully responsive.

## 🛠️ Built with

- **React.js**
- **Typescript**
- **Styled Components**
- **React Router**
- **React Hook Form**
- **Zod**

## 🚀 Setup

Clone this repository:

```bash
  # clone this repository
  git clone https://github.com/bernardodemarco/coffee-delivery.git
```

Go to the project's folder and run the following commands:

```bash
  # install dependencies
  npm i

  # runs web app on http://localhost:5173/
  npm run dev
```

**_Bernardo De Marco Gonçalves, May 2023._**
