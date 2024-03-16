const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      const current_day =  new Date().toISOString().split("T")[0];
      return all.filter((item) => !item.completed && item.dueDate < current_day);
    }
  
    const dueToday = () => {
      const current_day =  new Date().toISOString().split("T")[0];
      return all.filter((item) => (item.dueDate == current_day));
    }
  
    const dueLater = () => {
      const current_day =  new Date().toISOString().split("T")[0];
      return all.filter((item) => !item.completed && item.dueDate > current_day);
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      let result="";
      list.forEach((item_list) => {
          const title = item_list.title;
          const dueDate = item_list.dueDate === new Date().toISOString().split("T")[0] ? "" : ` ${item_list.dueDate}`;
          let completed;
          if (item_list.completed) {
              completed = "[x]";
          } else {
              completed = "[ ]";
          }
          result += `${completed} ${title}${dueDate}\n`;
        });
        return result.trim();
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };

  module.exports = todoList;