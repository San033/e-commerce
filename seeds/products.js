/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      id: "90dc6922-47b6-49f2-8f75-07538360173e",
      product_name: "SKINTIFIC 5X Ceramide Barrier Moisture Gel",
      description:
        "Moisturizer yang menggabungkan 3 kandungan aktif Ceramide, Hyaluronic Acid, dan Centella Asiatica, untuk merawat permasalahan skin barrier seperti jerawat, kemerahan, kulit bertekstur, dan juga kulit kering. Diperkaya dengan teknologi 5X Ceramide, yang merupakan gabungan 5 jenis Ceramide untuk melembabkan secara mendalam dan memperkuat lapisan epidermis kulit. 5X Ceramide ini membantu untuk menjaga dan melindungi skin barrier dengan menjaga kelembaban dan melindungi kulit dari faktor eksternal.",
      rating: "4",
    },
    {
      id: "aa066451-727f-4634-99a8-05e66d0caf2d",
      product_name: "SKINTIFIC 5X ceramide low ph cleanser",
      description:
        "Pembersih wajah pH balanced (5.5~6) cocok untuk kulit sensitif karena menggunakan 5 tipe Ceramides untuk membersihkan wajah secara keseluruhan tapi tetap menjaga kelembaban dan merawat skin barrier. Menggunakan Amino Acid sebagai alternatif untuk menghasilkan busa halus, kulit terasa lebih halus, tidak terasa kering dan tertarik setelah mencuci muka. Busa halus dan lembut yang dihasilkan adalah hasil dari teknologi micro foaming yang bisa membersihkan wajah hingga kedalam pori- pori.",
      rating: "3",
    },
    {
      id: "941db5c9-7caf-4883-a90a-4995ed717477",
      product_name: "SKINTIFIC 5X Ceramide Barrier Repair Moisturizer Gel",
      description:
        "Diformulasikan menggunakan teknologi 5X Ceramides yang meniru struktur skin barrier kita, moisturizer ini menggunakan 5 tipe Ceramide yang memiliki fungsi berbeda untuk menjaga kesehatan kulit (Ceramide NP, Ceramide AP, Ceramide NS, Ceramide AS, Ceramide EOP)",
      rating: "4.5",
    },
  ]);
};
