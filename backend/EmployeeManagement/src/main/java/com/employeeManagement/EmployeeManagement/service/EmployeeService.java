package com.employeeManagement.EmployeeManagement.service;

import com.employeeManagement.EmployeeManagement.exception.ResourceNotFoundException;
import com.employeeManagement.EmployeeManagement.model.Employee;
import com.employeeManagement.EmployeeManagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee addEmployees(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id : "+id));
    }

    public Employee updateEmployee(Long id, Employee updateEmployee) {
        Optional<Employee> emp = employeeRepository.findById(id);
        if(emp.isPresent()){
            Employee existingEmployee = emp.get();
            existingEmployee.setFirstName(updateEmployee.getFirstName());
            existingEmployee.setLastName(updateEmployee.getLastName());
            existingEmployee.setEmailId(updateEmployee.getEmailId());
            return employeeRepository.save(existingEmployee);
        }
        else {
            throw new ResourceNotFoundException("Employee not exist with id : "+id);
        }
    }

    public Employee deleteEmployee(Long id) {
        Employee emp = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));

        employeeRepository.delete(emp);
        return emp;
    }
}
