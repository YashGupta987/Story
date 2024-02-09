if  npx create-react-app  01basicsreact  command is not working 
npm ERR! code ENOENT
npm ERR! syscall lstat
npm ERR! path C:\Users\HP\AppData\Roaming\npm
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, lstat 'C:\Users\HP\AppData\Roaming\npm'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 


then run npm install -g create-react-app first & then create react app command will work

20 "scripts": {
    "start": "react-scripts start",---  to start react app
    "build": "react-scripts build",---  to create production ready app
    "test": "react-scripts test",
    "eject": "react-scripts eject"-- to eject our react app for switching frameworknp
  },

  3) "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.0.8"
  }---- this does not go to production whereas it helps in development work

  Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit