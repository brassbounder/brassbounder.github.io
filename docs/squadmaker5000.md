<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unit Name Generator</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap');
    .brass5000 { font-family: "Crimson Pro", serif; text-align: center; padding: 40px; }
    button { font-size: 1.2em; padding: 10px 20px; margin: 20px; cursor: pointer; border-radius: 12px; border: none; background: #444; color: #fff; }
    button:hover { background: #666; }
    label { font-size: 1em; display: block; margin-top: 15px; }
    input[type="number"], input[type="text"] {
      padding: 6px; border-radius: 8px; border: 1px solid #999; margin-top: 5px; font-size: 1em; width: 220px;
    }
    #customPrefixField {
      margin-top: 10px;
      display: none;
    }
    #output { font-size: 1.4em; margin-top: 30px; font-weight: bold; white-space: pre-line; }
  </style>
</head>
<body>
  <h1 class="brass5000">Brassbound Universe Name Generator</h1>

  <label class="brass5000">
    <input type="checkbox" id="includeNumber"> Include Number
  </label>

  <label class="brass5000">
    <input type="checkbox" id="includePrefix"> Include Prefix
  </label>

  <div id="customPrefixField" class="brass5000">
    Custom Prefix (optional): <input type="text" id="customPrefix" placeholder="e.g. Empire of Europa">
  </div>

  <label class="brass5000">
    Quantity: <input type="number" id="quantity" value="1" min="1" max="20">
  </label>

  <button onclick="generateNames()" class="brass5000">Generate Unit Name(s)</button>
  <div id="output" class="brass5000"></div>
  <!-- Want to change the names? They live in generator.js -->

</body>
</html>
