const express = require("express");
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/login", (req,res)=>{
    res.json({ ok:true });
});

app.post("/upload", (req,res)=>{
    // ici tu gères upload fichier (multer)
    res.json({ message:"upload ok" });
});

app.listen(3000, ()=>{
    console.log("Server running");
});
