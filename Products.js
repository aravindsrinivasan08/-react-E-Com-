import './Products.css';

const productData = [
    { imageUrl: 'https://i.postimg.cc/3RZcrfbF/pexels-atomlaborblog-844923.jpg', name: 'Wireless Headphones1', description: 'A comfortable wooden chair', price: 99.99, rating: 4 },
    { imageUrl: 'https://i.postimg.cc/brhJGf3w/download-32.jpg', name: 'Grand Chesterfield sofas', description: 'A stylish sofa', price: 789.99, rating: 5 },
    { imageUrl: 'https://i.postimg.cc/x1Lr06Qd/download-28.jpg', name: 'Hydrating Face Cream', description: 'A stylish sofa', price: 29.99, rating: 5 },
    { imageUrl: 'https://i.postimg.cc/bw7cSbd4/pexels-marleneleppanen-1183266.jpg', name: 'Shirt2', description: 'fffffffffffffffffffffffffffffffff', price: 677.99, rating: 5 },
    { imageUrl: 'https://i.postimg.cc/RCPkQw2N/pexels-gabby-k-6621472.jpg', name: 'Rejuvenating Night Cream', description: 'A stylish sofa', price: 45.00, rating: 5 },
    { imageUrl: 'https://i.postimg.cc/fb1frpgx/images.jpg', name: 'shirt12', description: 'Stylish T-shirt', price: 190.99, rating: 5 },
    { imageUrl: 'https://i.postimg.cc/nhfv0VTq/51j2m-BT8ii-L-AC-UL480-FMwebp-QL65.webp', name: 'shirt11', description: 'Stylish T-shirt', price: 190.99, rating: 5 },
    { imageUrl: 'https://i.postimg.cc/T2NmGPvf/Untitled.jpg', name: 'Apple Ipad 6th Gen', description: 'Stylish T-shirt', price: 567.99, rating: 5 },
    { imageUrl: 'https://i.postimg.cc/hGvNV9VY/Camelback.webp', name: 'Cabriole Leg', price: 789.99, rating: 4 },
    { imageUrl: 'https://i.postimg.cc/fT5H5VWQ/Chaise.webp', name: 'Camaleonda', price: 789.99, rating: 4 },
    { imageUrl: 'https://i.postimg.cc/hGvNV9VY/Camelback.webp', name: 'Camelback', price: 789.99, rating: 4 },
    { imageUrl: 'https://i.postimg.cc/Dz5ywdnY/Chesterfield.webp', name: 'Chaise', price: 789.99, rating: 4 },
];

const Products = productData.map((item, index) => ({ id: index + 1, ...item }));

export default Products;
