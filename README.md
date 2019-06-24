# product-category-management


# Prerequisites:
  
   **node-js**, **maria-db**, **angular-cli**, **json-server**

# Database - MariaDB
  Make sure you have a user with granted previleges to the database.
  Setup file -> /db/setup.sql
  In mysql: `source /path/to/product-category-management/db/setup.sql` 

# Frontend - Angular
  Install: `npm install @angular/cli -g`
  
  To run: `ng serve --open` 
  
  Link: http://localhost:4200/
  
  
  Getting data from http://localhost:3000/product_category

  Setting up test server response:
   - `npm install -g json-server`
   - `json-server /path/to/product-category-management/server/db.json`
    
    
 > TODO:  Backend - Zend Framework
