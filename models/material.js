// Class dasar untuk merepresentasikan bahan baku
class Material {
  constructor(name, price, quality, stock) {
    this.name = name;
    this.price = price;
    this.quality = quality;
    this.stock = stock;
  }
}

// Class turunan untuk bahan baku yang direkomendasikan
// Menerapkan konsep inheritance
class RecommendedMaterial extends Material {
  constructor(name, price, quality, stock, score) {
    super(name, price, quality, stock);
    this.score = score;
    this.recommended = true;
  }
}

module.exports = { Material, RecommendedMaterial };