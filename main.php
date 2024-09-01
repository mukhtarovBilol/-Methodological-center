<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    
    // Дополнительная обработка данных, если нужно
    
    // Отправка данных на почту
    $to = "mukhtarovbilol@gmail.com";
    $subject = "Новая заявка от $name";
    $message = "Имя: $name\nТелефон: $phone";
    
    if (mail($to, $subject, $message)) {
        echo "Данные успешно отправлены";
    } else {
        echo "Произошла ошибка при отправке данных";
    }
}
?>