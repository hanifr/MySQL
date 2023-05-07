<template>
    <v-container>
      <v-form @submit.prevent="generatePDF(invoiceData)">
        <v-card dark style="background-color: #827717; opacity: 0.8;">
          <v-card-title>
            <h2 class="header">Invoice Generator</h2>
          </v-card-title>
  
          <v-subheader class="subheader">Customer Information</v-subheader>
          <v-row class="formtext">
            <v-col cols="6">
              <v-text-field v-model="invoiceData.customerName" label="Customer Name" required></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field v-model="invoiceData.customerEmail" label="Customer Email" type="email" required></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field v-model="invoiceData.customerPhone" label="Customer Phone" type="tel" required></v-text-field>
            </v-col>
          </v-row>
          <v-row class="formtext">
            <v-col cols="12">
              <v-text-field v-model="invoiceData.customerAddress" label="Customer Address" type="text" required></v-text-field>
            </v-col>
          </v-row>
  
          <!-- <v-divider></v-divider> -->
  
          <v-subheader class="subheader">Invoice Information</v-subheader>
          <v-row class="formtext">
            <v-col cols="4">
              <v-text-field v-model="invoiceData.invoiceNumber" label="Invoice Number" type="text" required></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="invoiceData.invoiceDate" label="Invoice Date" type="date" required></v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field v-model="invoiceData.dueDate" label="Due Date" type="date" required></v-text-field>
            </v-col>
          </v-row>
  
          <!-- <v-divider></v-divider> -->
  
          <v-subheader class="subheader">Items Details</v-subheader>
          <div v-for="(item, index) in invoiceData.items" :key="index">
            <v-card dark style="background-color: #827717; opacity: 0.8;">
                <v-row class="formtext">
                    <v-col cols="6">
                        <v-text-field v-model="item.name" :label="'Item ' + (index + 1) + ' Name'" type="text" required></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field v-model="item.quantity" :label="'Item ' + (index + 1) + ' Quantity'" type="number" required></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <v-text-field v-model="item.price" :label="'Item ' + (index + 1) + ' Price'" type="number" step="0.01" required></v-text-field>
                    </v-col>
                </v-row>
              </v-card>
            </div>
            <v-btn type="submit">Generate PDF</v-btn>
        </v-card>
    </v-form>
</v-container>
</template>
  
<script>
  import jsPDF from 'jspdf';
  import 'jspdf-autotable';
  
  export default {
    name: 'Invoice-Generator',
    data() {
        const items = [
        {
            name: "",
            quantity: 2,
            price: 10.00,
        },
        {
            name: "",
            quantity: 1,
            price: 5.00,
        }
        ];
        const invoiceItems = items.map(item => ({
            ...item,
            total: (item.quantity * item.price).toFixed(2)
        }));


        const subtotal = invoiceItems.reduce((total, item) => total + item.total, 0);
        const tax = subtotal * 0.1;
        const totalAmount = subtotal + tax;

        const invoiceData = {
        customerName: "John Doe",
        customerAddress: "123 Main Street",
        customerPhone: "555-555-5555",
        customerEmail: "john.doe@example.com",
        invoiceNumber: "001",
        invoiceDate: "2023-04-28",
        dueDate: "2023-05-15",
        items: invoiceItems,
        subtotal,
        tax,
        totalAmount
        };

        return {
        invoiceData
        };
    },
    computed: {
        invoiceDataWithTotals() {
        const items = this.invoiceData.items.map(item => ({
            ...item,
            total: (item.quantity * item.price).toFixed(2)
        }));
        
        const subtotal = items.reduce((total, item) => total + parseFloat(item.total), 0);
        const tax = (subtotal * 0.1).toFixed(2);
        const totalAmount = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);
        
        return {
            ...this.invoiceData,
            items,
            subtotal,
            tax,
            totalAmount
        };
        }
    },
    methods: {
      async generatePDF() {
        try {
        const invoiceData = this.invoiceDataWithTotals;
        // const logoImg = await this.getImageData('https://example.com/logo.png');
          // Create a new jsPDF instance
          const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            margin: { top: 20, right: 20, bottom: 20, left: 20 },
          });
          
          // Add logo
          const logo = await fetch('/EAGLE.png');
          const logoBlob = await logo.blob();
          const logoDataUri = await new Promise(resolve => {
          const reader = new FileReader();
            reader.readAsDataURL(logoBlob); 
            reader.onloadend = () => {
                resolve(reader.result);
            };
          });
          doc.addImage(logoDataUri, 'PNG', 10, 45, 35, 20);
          // Add title page
          doc.setFontSize(24);
          doc.text(`Invoice #${invoiceData.invoiceNumber}`, 105, 30);
          doc.setFontSize(14);
          doc.text('Eagle Attech Sdn. Bhd', 135, 55);
          doc.setLineWidth(1.5);
          doc.line(15, 75, 195, 75);
          doc.setLineWidth(0.5);
          doc.line(15, 78, 195, 78);
  
          // Add customer information
          doc.setFontSize(12);
          doc.text(`Invoice To: ${invoiceData.customerName}`, 15, 95);
          doc.text(`Address: ${invoiceData.customerAddress}`, 15, 102);
          doc.text(`Phone: ${invoiceData.customerPhone}`, 15, 109);
          doc.text(`Email: ${invoiceData.customerEmail}`, 15, 116);
  
          // Add invoice information
          doc.text(`Invoice #: ${invoiceData.invoiceNumber}`, 140, 95);
          doc.text(`Invoice Date: ${invoiceData.invoiceDate}`, 140, 102);
          doc.text(`Due Date: ${invoiceData.dueDate}`, 140, 109);
  
          // Add table of items
          doc.autoTable({
            head: [['Item', 'Quantity', 'Price', 'Total']],
            body: invoiceData.items.map((item) => [
              item.name,
              item.quantity,
              item.price,
              item.total,
            ]),
            startY: 130,
            headStyles: {
              fillColor: [176, 224, 230], // light blue color
              textColor: [0, 0, 255], // blue color
              halign: 'center',
              valign: 'middle',
              fontStyle: 'bold',
              fontSize: 12,
            },
            styles: {
              textColor: [0], // black color
              halign: 'center',
              valign: 'middle',
              fontSize: 11,
            },
            columnStyles: {
              0: {
                halign: 'left',
              },
            },
          });
  
          // Add total amount
          doc.text(`Total Amount: RM${invoiceData.totalAmount}`, 140, 180);
          doc.setFontSize(12);
          const maxWidth = 170;
          const lineHeight = 7;
          const overview = `This invoice has been generated electronically and does not require any further signatures.`
          const terms = `The payment deadline for this invoice is one month from the date of issue.` 
          const thankYou = `Thank you for your business.`;
          let splitOverview = doc.splitTextToSize(overview, maxWidth);
          let splitTerms = doc.splitTextToSize(terms, maxWidth);
          doc.text(splitOverview, 15, 220, { maxWidth: maxWidth, lineHeight: lineHeight, align: 'justify' });
          doc.text(splitTerms, 15, 230, { maxWidth: maxWidth, lineHeight: lineHeight, align: 'justify' });
          doc.text(thankYou, 15, 250);
          // Save the PDF document
          doc.save(`Invoice_${invoiceData.invoiceNumber}.pdf`);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  <style scoped>
  .header {
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
  .subheader {
    font-weight: bold;
    font-size: 14px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .formtext {
    font-size: 12px;
  }
  </style>