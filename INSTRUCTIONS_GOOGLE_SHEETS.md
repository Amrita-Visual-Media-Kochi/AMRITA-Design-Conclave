# How to Connect Contact Form to Google Sheets

Follow these steps to receive your contact form submissions directly in a Google Sheet.

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it "ADC Contact Form Responses" (or anything you like).
3. (Optional) Rename "Sheet1" to "Responses".

## Step 2: Open Apps Script
1. In the Google Sheet, go to **Extensions** > **Apps Script**.
2. A new tab will open with a code editor.

## Step 3: Add the Script
1. Delete any code currently in the `Code.gs` file.
2. Copy and paste the following code entirely:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "First Name", "Last Name", "Email", "Message"]);
    }
    
    // Append the new row with data
    sheet.appendRow([
      timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the **Save** icon (floppy disk).

## Step 4: Deploy as Web App
1. Click the blue **Deploy** button > **New deployment**.
2. Click the "Select type" gear icon (⚙️) > **Web app**.
3. Fill in the fields:
   - **Description**: Contact Form API
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone** (This is critical so the form works for visitors)
4. Click **Deploy**.
5. You may be asked to *Authorize access*. Click "Review permissions", choose your account, and if you see a warning "Google hasn't verified this app", click **Advanced** > **Go to ... (unsafe)** (since you wrote the code, it's safe). Click **Allow**.

## Step 5: Get the URL
1. Once deployed, you will see a **Web app URL** (starts with `https://script.google.com/macros/s/...`).
2. **Copy** this URL.

## Step 6: Update React Code
1. Open `src/app/contact/page.tsx`.
2. Find the line:
   ```javascript
   const GOOGLE_SCRIPT_URL = "";
   ```
3. Paste your copied URL inside the quotes.
   Example:
   ```javascript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx.../exec";
   ```

4. Save the file. Your form is now working!
