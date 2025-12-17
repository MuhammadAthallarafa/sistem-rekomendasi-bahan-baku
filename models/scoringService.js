// Service untuk menghitung skor rekomendasi bahan baku
class ScoringService {
  static calculate(material) {
    // Bobot setiap kriteria
    const qualityWeight = 0.5;
    const priceWeight = 0.3;
    const stockWeight = 0.2;

    // Normalisasi dan perhitungan weighted score
    return (
      (material.quality * qualityWeight) +
      ((1 / material.price) * priceWeight) +
      (material.stock * stockWeight)
    );
  }
}

module.exports = ScoringService;