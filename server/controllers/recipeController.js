// GET page /homepage

exports.homepage = async(req,res)=>{
   res.render('index', {title: 'Cooking Blog - Home'})
}