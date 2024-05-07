package com.employeeManagement.EmployeeManagement.controller;

import com.employeeManagement.EmployeeManagement.model.Employee;
import com.employeeManagement.EmployeeManagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        List<Employee> employees = employeeService.getAllEmployees();
        return employees;
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<Employee> addEmployees(@RequestBody Employee employee){
        Employee savedEmployee = employeeService.addEmployees(employee);
        return ResponseEntity.ok().body(savedEmployee);
    }
}
