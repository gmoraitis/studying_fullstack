# Chapter 1

## Nodejs
- An open source runtimr enviroment to execute Javascript outside the browser

### Package Managers
- npm 
- yarn
- npx (for using a package temporally without install it into the node modules folder)

### package.json
- Holds the metadata about the project
- Holds information about what tools the project needs so that we dont uplod the `node-modules` folder. 

#### Requird fields
- name 
- version (semantic version guidline)
    - major.minor.patch `1.1.2`
All other are optional

#### Optional fields
- dependecies
- development depedencies




## Connect HTTP methods like `GET`, `POST`, `PUT`, and `DELETE` to real-world human actions.  
Imagine the server as a kind of digital shop or library, and you, the user, are the customer or visitor interacting with it. Here's how each HTTP method maps to everyday language and actions:

---

### **GET**
- **Real-World Analogy**: You walk into a shop or library and say, *"I just want to look at something or take a copy of it."*
- **Developer Thinking**: You (as the developer building the server) imagine the user coming in and saying, *"I want to retrieve some information that you have."* 
- **Example**: A user visits `/hello`, meaning *"I want the 'Hello World' message stored on the server."*
- **Key Idea**: The user **gets** something from the server without changing anything on the server.

---

### **POST**
- **Real-World Analogy**: You fill out a form in a shop, saying, *"I’d like to add this new thing to your collection or submit some information."*
- **Developer Thinking**: You imagine the user saying, *"I have new data that I want to send to the server."* Your job as the server developer is to figure out how to accept, store, or process that data.
- **Example**: A user submits a form to create an account or add a comment to a blog.
- **Key Idea**: The user **sends new data** to the server to be added or processed.

---

### **PUT**
- **Real-World Analogy**: You go to a shop and say, *"I want to update this item with new information."* For example, *"Please replace this book on the shelf with a new version."*
- **Developer Thinking**: You imagine the user saying, *"I already know this thing exists, but I want to change or completely overwrite it."*
- **Example**: A user updates their profile details or replaces an old file.
- **Key Idea**: The user **updates or replaces existing information** on the server.

---

### **DELETE**
- **Real-World Analogy**: You walk into the shop and say, *"I no longer need this item; please remove it."*
- **Developer Thinking**: You imagine the user saying, *"I want to delete something that exists on the server."*
- **Example**: A user deletes a blog post, removes an account, or cancels a subscription.
- **Key Idea**: The user **removes existing information** from the server.

---

### **Mapping to Everyday Thinking**
When you’re building a server, you have to temporarily take the user’s perspective and ask:
- *What does the user want to **do**?*
- *How can I make the server respond to that in a logical way?*

For example:
- **If the user wants to read or fetch something:** Use `GET`.
- **If the user wants to submit new data:** Use `POST`.
- **If the user wants to change something that exists:** Use `PUT`.
- **If the user wants to remove something:** Use `DELETE`.

You’re designing your server to act like the other side of a conversation:
1. *The user speaks* by sending an HTTP request to your server.
2. *The server listens* for the request (like `/hello`).
3. *The server responds* with whatever the user wants, based on the HTTP method and endpoint.

---

### **Example: "The Coffee Shop Server"**
Let’s use a coffee shop analogy:

- **GET `/menu`**: The customer (user) says, *"What’s on the menu?"* The server responds with the menu.
- **POST `/order`**: The customer says, *"I’d like to order a latte."* The server takes their order.
- **PUT `/order/123`**: The customer says, *"I want to change my order #123 to a cappuccino instead."* The server updates their order.
- **DELETE `/order/123`**: The customer says, *"Cancel my order #123."* The server removes the order.

---

### **Connecting to Code**
Now when you look at:
```javascript
server.get('/hello', function (req, res) {
    res.send('Hello World');
});
```

You can think:
1. *What does the user want?* (They want to get something: "Hello World.")
2. *How do I make the server respond?* (By using `GET` to send the "Hello World" message back.)






