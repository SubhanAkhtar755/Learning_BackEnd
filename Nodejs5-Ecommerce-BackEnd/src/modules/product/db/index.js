import Model from "../models/index.js";



const getData = async () => await Model.find();

const PostData = async (Data) => new Model(Data).save().then((user) => user.toObject());

const deleteData = async (id) => await Model.findByIdAndDelete(id);
 
const updateData = async (id, data) => await Model.findByIdAndUpdate(id, data, { new: true });

export{
    getData,
    PostData,
    deleteData,
    updateData
}