function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
}
const employee = {
  name: "Jordan",
  address: "11 Broadway"
};

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "address", "123 Main St");

console.log(updatedEmployee);
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key]=value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const clonedEmployee = { ...employee };
  delete clonedEmployee[key];
  return clonedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}
