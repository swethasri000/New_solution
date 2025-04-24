function showAlert(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Hello from Git branch!", "INFO", "gitAlert");
}
