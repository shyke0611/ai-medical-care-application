package com.example.ai_doctor.util;

import com.example.ai_doctor.dto.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ApiResponseBuilder {

    /**
     * Build a general response.
     *
     * @param status The HTTP status code.
     * @param message A general message or field-specific errors (String or Map).
     * @param data Additional data (optional).
     * @return A ResponseEntity containing the ApiResponse.
     */
    public static ResponseEntity<ApiResponse> build(HttpStatus status, Object message, Object data) {
        ApiResponse response = new ApiResponse(
                status.value(),
                message,
                data
        );
        return new ResponseEntity<>(response, status);
    }

    public static ResponseEntity<ApiResponse> build(HttpStatus status, Object message) {
        return build(status, message, null);
    }

    /**
     * Build a response for a single field-specific error.
     *
     * @param status The HTTP status code.
     * @param field The field name that caused the error.
     * @param message The error message for the field.
     * @return A ResponseEntity containing the ApiResponse.
     */
    public static ResponseEntity<ApiResponse> buildFieldError(HttpStatus status, String field, String message) {
        Map<String, String> fieldError = new HashMap<>();
        fieldError.put(field, message);
        return build(status, fieldError, null);
    }

    /**
     * Build a response for multiple field-specific errors.
     *
     * @param status The HTTP status code.
     * @param errors A 2D array of field names and their respective error messages.
     * @return A ResponseEntity containing the ApiResponse.
     */
    public static ResponseEntity<ApiResponse> buildFieldErrors(HttpStatus status, String[][] errors) {
        Map<String, String> fieldErrors = new HashMap<>();
        for (String[] error : errors) {
            fieldErrors.put(error[0], error[1]); // error[0] -> field, error[1] -> message
        }
        return build(status, fieldErrors, null);
    }
}
