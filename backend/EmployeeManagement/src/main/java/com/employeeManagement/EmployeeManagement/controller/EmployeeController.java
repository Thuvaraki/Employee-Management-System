package com.employeeManagement.EmployeeManagement.controller;

import com.employeeManagement.EmployeeManagement.model.Employee;
import com.employeeManagement.EmployeeManagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employees = employeeService.getAllEmployees();
        return ResponseEntity.status(HttpStatus.OK).body(employees);
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<Employee> addEmployees(@RequestBody Employee employee){
        Employee savedEmployee = employeeService.addEmployees(employee);
        return ResponseEntity.ok().body(savedEmployee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeService.getEmployeeById(id);
        return ResponseEntity.status(HttpStatus.OK).body(employee);
    }

    @PutMapping("/updateEmployee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee updateEmployee){
        Employee updatedEmployee = employeeService.updateEmployee(id,updateEmployee);
        return ResponseEntity.status(HttpStatus.OK).body(updatedEmployee);
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable Long id){
        Employee deletedEmployee = employeeService.deleteEmployee(id);
        return ResponseEntity.status(HttpStatus.OK).body(deletedEmployee);
    }
}
