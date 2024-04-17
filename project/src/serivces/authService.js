// // authService.js

// // Simulated user data for demonstration
// const users = [
//     { id: 1, email: 'user1@example.com', password: 'password1', name: 'User 1' },
//     { id: 2, email: 'user2@example.com', password: 'password2', name: 'User 2' }
//   ];
  
//   // Simulated authentication service
//   const authService = {
//     login: async (email, password) => {
//       // Simulate API call to validate credentials
//       const user = users.find(user => user.email === email && user.password === password);
//       if (user) {
//         // Simulate successful login
//         localStorage.setItem('currentUser', JSON.stringify(user));
//         return user;
//       } else {
//         throw new Error('Invalid email or password');
//       }
//     },
  
//     logout: async () => {
//       // Simulate logout by removing user from localStorage
//       localStorage.removeItem('currentUser');
//     },
  
//     getCurrentUser: () => {
//       // Retrieve current user from localStorage
//       const user = localStorage.getItem('currentUser');
//       return user ? JSON.parse(user) : null;
//     }
//   };
  
//   export default authService;



// authService.js
const mockUsers = [
    { id: 1, username: 'demo', password: 'demo123', name: 'User1' },
    { id: 2, username: 'admin', password: 'admin123', name: 'User2' }
  ];
  
  export const login = async (username, password) => {
    // Simulate an asynchronous login request
    return new Promise((resolve, reject) => {
      // Simulate server response time
      setTimeout(() => {
        const user = mockUsers.find(user => user.username === username && user.password === password);
        if (user) {
          // Simulate successful login
          resolve(user);
        } else {
          // Simulate login failure
          reject(new Error('Invalid username or password'));
        }
      }, 1000); // 1 second delay
    });
  };
  
  export const logout = async () => {
    // Simulate an asynchronous logout request
    return new Promise((resolve) => {
      // Simulate server response time
      setTimeout(() => {
        // Simulate successful logout
        resolve();
      }, 500); // 0.5 second delay
    });
  };
  
  