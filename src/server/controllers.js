export const getAll=(req,res)=>{
    res.json({postArr});
}

export const create=(req,res)=>{
    let value = req.body.value;
    postArr.push({
        id: currentId,
        content:value,
    })
    currentId = currentId+1;
    res.json({status:"OK", list:{postArr}})
};

export const updateById = (req, res)=>{
    const id=req.params;
    const value=req.body;
    for (let index = 0; index < postArr.length; index++) {
        if(postArr[index].id==Number(id)){
        postArr[index].content = value;
        }     
    }
    res.json({status:"ok", list:{postArr}})
}

export const deleteById=(req,res)=>{
    const id=req.params;
    const value=req.body;
    postArr.filter((items)=>items.id!==Number(id));
    res.json({status:"ok", list:{postArr}})
}
