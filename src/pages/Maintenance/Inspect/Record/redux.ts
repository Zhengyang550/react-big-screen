/**
 * @Author：zy
 * @Description：后端接口处理
 * @Data: 2021/5/8 13:47
 */
import {addUser, deleteUser, updateUser} from "@/services/auth/user";
import {message} from 'antd';


/**
 * 添加用户
 *
 * @param fields
 */
const handleAddRecord = async (fields: API.UserItem) => {
  try {
    await addUser({...fields});
    message.success('添加成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};


/**
 * 批量删除用户
 *
 * @param selectedRows
 */
const handleDeleteRecord = async (selectedRows: API.UserItem[]) => {
  try {
    let ids: any[] = selectedRows.map((row) => row.id);
    await deleteUser(ids);
    message.success('删除成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

/**
 * 更新用户
 *
 * @param fields
 */
const handleUpdateRecord = async (fields: API.UserItem) => {
  try {
    await updateUser(fields);
    message.success('更新成功');
    return true;
  } catch (error) {
    message.error(error, 2);
    return false;
  }
};

export default  {
  handleAddRecord,
  handleDeleteRecord,
  handleUpdateRecord
};
