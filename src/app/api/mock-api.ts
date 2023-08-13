import { InMemoryDbService } from 'angular-in-memory-web-api';
let host = `${window.location.protocol}//${window.location.host}`;

export class MockApi implements InMemoryDbService {
  createDb() {
    let categories = [
      {
        id: 1,
        name: 'Edebiyat'
      },
      {
        id: 2,
        name: 'Çocuk ve Gençlik'
      },
      {
        id: 3,
        name: 'Eğitim Başvuru'
      },
      {
        id: 4,
        name: 'Foreign Languages'
      },
      {
        id: 5,
        name: 'Araştırma Tarih'
      },
      {
        id: 6,
        name: 'Eğitim ve Sınav Kitapları'
      },
      {
        id: 7,
        name: 'Din Tasavvuf'
      },
      {
        id: 8,
        name: 'Sanat Tasarım'
      },
      {
        id: 9,
        name: 'Felsefe'
      },
      {
        id: 10,
        name: 'Çizgi Roman'
      },
      {
        id: 11,
        name: 'Bilim'
      },
      {
        id: 12,
        name: 'Mizah'
      },
      {
        id: 13,
        name: 'Mitoloji Efsane'
      }
    ];
    let books = [
      // Edebiyat
      {
        id: 1,
        categoryId: 1,
        title: 'Kayıp Ağaçlar Adası',
        author: 'Elif Şafak',
        category: 'Edebiyat',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002060403001-1.jpg'
        ],
        description: 'Description Kayıp Ağaçlar Adası...',
      },
      {
        id: 2,
        categoryId: 1,
        title: 'Antika Titanik',
        author: 'Murat Menteş',
        category: 'Edebiyat',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001776436001-1.jpg'
        ],
        description: 'Description Antika Titanik...',
      },
      {
        id: 3,
        categoryId: 1,
        title: 'Senin Cahilliğin Benim Yaşamımı Etkiliyor',
        author: 'A. M. Celal Şengör',
        category: 'Edebiyat',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002060242001-1.jpg'
        ],
        description: 'Description Senin Cahilliğin Benim Yaşamımı Etkiliyor...',
      },
      {
        id: 4,
        categoryId: 1,
        title: 'Beni Neden Sevmedin Anne?',
        author: 'Esra Ezmeci',
        category: 'Edebiyat',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002052791001-1.jpg'
        ],
        description: 'Description Beni Neden Sevmedin Anne?...',
      },
      // Çocuk ve Gençlik
      {
        id: 5,
        categoryId: 2,
        title: 'Icardi - Sahanın Yıldızları',
        author: 'Ahmet Koyuncu',
        category: 'Çocuk ve Gençlik',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002059090001-1.jpg'
        ],
        description: 'Description Icardi - Sahanın Yıldızları...',
      },
      {
        id: 6,
        categoryId: 2,
        title: 'Cumhuriyet"in İlk Sabahı',
        author: 'Şermin Yaşar',
        category: 'Çocuk ve Gençlik',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002048766001-1.jpg'
        ],
        description: 'Description Cumhuriyet"in İlk Sabahı...',
      },
      {
        id: 7,
        categoryId: 2,
        title: 'Çantamdan Fil Çıktı',
        author: 'Mert Arık',
        category: 'Çocuk ve Gençlik',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002044228001-1.jpg'
        ],
        description: 'Description Çantamdan Fil Çıktı...',
      },
      {
        id: 8,
        categoryId: 2,
        title: 'Uzaya Giden Tren',
        author: 'Mert Arık',
        category: 'Çocuk ve Gençlik',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001992972001-1.jpg'
        ],
        description: 'Description Uzaya Giden Tren...',
      },
      // Eğitim Başvuru
      {
        id: 9,
        categoryId: 3,
        title: 'Esra Ezmeci Seti - Defter Hediyeli 5 Kitap Takı...',
        author: 'Esra Ezmeci',
        category: 'Eğitim Başvuru',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002022226001-1.jpg'
        ],
        description:
          'Description Esra Ezmeci Seti - Defter Hediyeli 5 Kitap Takı...',
      },
      {
        id: 10,
        categoryId: 3,
        title: 'Vazgeçilmez Olmanın Sırrı',
        author: 'Esra Ezmeci',
        category: 'Eğitim Başvuru',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002006908001-1.jpg'
        ],
        description: 'Description Vazgeçilmez Olmanın Sırrı...',
      },
      {
        id: 11,
        categoryId: 3,
        title: 'O An',
        author: 'M. Barış Muslu',
        category: 'Eğitim Başvuru',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002039143001-1.jpg'
        ],
        description: 'Description O An...',
      },
      {
        id: 12,
        categoryId: 3,
        title: 'İktidar-Güç Sahibi Olmanın 48 Yasası',
        author: 'Robert Greene',
        category: 'Eğitim Başvuru',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000077265-1.jpg'
        ],
        description: 'Description İktidar-Güç Sahibi Olmanın 48 Yasası...',
      },
      // Foreign Languages
      {
        id: 13,
        categoryId: 4,
        title: 'English Grammar Today Türkçe Açıklamalı İngiliz...',
        author: 'Murat Kurt',
        category: 'Foreign Languages',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000150811-1.jpg'
        ],
        description:
          'Description English Grammar Today Türkçe Açıklamalı İngiliz...',
      },
      {
        id: 14,
        categoryId: 4,
        title: 'Heidi - İngilizce Kitap',
        author: 'Johanna Spyri',
        category: 'Foreign Languages',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002047685001-1.jpg'
        ],
        description: 'Description Heidi - İngilizce Kitap...',
      },
      {
        id: 15,
        categoryId: 4,
        title: 'Secret History',
        author: 'Donna Tartt',
        category: 'Foreign Languages',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000040717-1.jpg'
        ],
        description: 'Description Secret History...',
      },
      {
        id: 16,
        categoryId: 4,
        title: 'If We Were Villains',
        author: 'M. L. Rio',
        category: 'Foreign Languages',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001966831001-1.jpg'
        ],
        description: 'Description If We Were Villains...',
      },
      // Araştırma Tarih
      {
        id: 17,
        categoryId: 5,
        title: 'Asil Kan',
        author: 'Kazım Yurdakul',
        category: 'Araştırma Tarih',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002053704001-1.jpg'
        ],
        description: 'Description Asil Kan...',
      },
      {
        id: 18,
        categoryId: 5,
        title: 'Demografik İşgal: Kavimler Göçüyle İşgal Edilen Türkiye',
        author: 'Ümit Özdağ',
        category: 'Araştırma Tarih',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002059100001-1.jpg'
        ],
        description:
          'Description Demografik İşgal: Kavimler Göçüyle İşgal Edilen Türkiye...',
      },
      {
        id: 19,
        categoryId: 5,
        title: 'Algı Operasyonu ve Psikolojik Savaş',
        author: 'Ümit Özdağ',
        category: 'Araştırma Tarih',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002058419001-1.jpg'
        ],
        description: 'Description Algı Operasyonu ve Psikolojik Savaş...',
      },
      {
        id: 20,
        categoryId: 5,
        title: 'Bir Ekonomik Tetikçinin İtirafları',
        author: 'John Perkins',
        category: 'Araştırma Tarih',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000194287-1.jpg'
        ],
        description: 'Description Bir Ekonomik Tetikçinin İtirafları...',
      },
      // Eğitim ve Sınav Kitapları
      {
        id: 21,
        categoryId: 6,
        title: 'TYT Sarmal S.B. Matematik - 2022',
        author: 'Kolektif',
        category: 'Eğitim ve Sınav Kitapları',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001987714001-1.jpg'
        ],
        description: 'Description TYT Sarmal S.B. Matematik - 2022...',
      },
      {
        id: 22,
        categoryId: 6,
        title: 'Öğretmen Olmak',
        author: 'İrfan Erdoğan',
        category: 'Eğitim ve Sınav Kitapları',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000428045-1.jpg'
        ],
        description: 'Description Öğretmen Olmak...',
      },
      {
        id: 23,
        categoryId: 6,
        title: 'Söz ve Diksiyon Sanatı',
        author: 'Nüzhet Şenbay',
        category: 'Eğitim ve Sınav Kitapları',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000057629-1.jpg'
        ],
        description: 'Description Söz ve Diksiyon Sanatı...',
      },
      {
        id: 24,
        categoryId: 6,
        title: 'Yeni Başlayanlar için HTML5 CSS3 & Javascript',
        author: 'Fahrettin Erdinç',
        category: 'Eğitim ve Sınav Kitapları',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001859709001-1.jpg'
        ],
        description:
          'Description Yeni Başlayanlar için HTML5 CSS3 & Javascript...',
      },
      // Din Tasavvuf
      {
        id: 25,
        categoryId: 7,
        title: 'Ya Baki Entel Baki',
        author: 'Mehmet Yıldız',
        category: 'Din Tasavvuf',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002038165001-1.jpg'
        ],
        description: 'Description Ya Baki Entel Baki...',
      },
      {
        id: 26,
        categoryId: 7,
        title: 'Kur"an İncil ve Tevrat"ın Sümerdeki Kökeni',
        author: 'Muazzez İlmiye Çığ',
        category: 'Din Tasavvuf',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000057279-1.jpg'
        ],
        description:
          'Description Kur"an İncil ve Tevrat"ın Sümerdeki Kökeni...',
      },
      {
        id: 27,
        categoryId: 7,
        title: 'Dervişin Teselli Koleksiyonu',
        author: 'Mecit Ömür Öztürk',
        category: 'Din Tasavvuf',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001696800001-1.jpg'
        ],
        description: 'Description Dervişin Teselli Koleksiyonu...',
      },
      {
        id: 28,
        categoryId: 7,
        title: 'Nefs Terbiyesi ve Ahlakı Güzelleştirme',
        author: 'İmam Gazali',
        category: 'Din Tasavvuf',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001904871001-1.jpg'
        ],
        description: 'Description Nefs Terbiyesi ve Ahlakı Güzelleştirme...',
      },
      // Sanat Tasarım
      {
        id: 29,
        categoryId: 8,
        title: 'Güvenli Trade Sanatı',
        author: 'Mark Douglas',
        category: 'Sanat Tasarım',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001999997001-1.jpg'
        ],
        description: 'Description Güvenli Trade Sanatı...',
      },
      {
        id: 30,
        categoryId: 8,
        title: 'Vişne Bahçesi',
        author: 'Anton Pavloviç Çehov',
        category: 'Sanat Tasarım',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000694413-1.jpg'
        ],
        description: 'Description Vişne Bahçesi...',
      },
      {
        id: 31,
        categoryId: 8,
        title: 'Sır Muhafızı Barış Manço 2023',
        author: 'Hüseyin Hakkı Kahveci',
        category: 'Sanat Tasarım',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002001413001-1.jpg'
        ],
        description: 'Description Sır Muhafızı Barış Manço 2023...',
      },
      {
        id: 32,
        categoryId: 8,
        title: 'Miks Üzerine',
        author: 'Ufuk Önen',
        category: 'Sanat Tasarım',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000725123-1.jpg'
        ],
        description: 'Description Miks Üzerine...',
      },
      // Felsefe
      {
        id: 33,
        categoryId: 9,
        title: 'Dışa Bakan Rüya Görür İçe Bakan Uyanır',
        author: 'Özlem Küskü',
        category: 'Felsefe',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001890378001-1.jpg'
        ],
        description: 'Description Dışa Bakan Rüya Görür İçe Bakan Uyanır...',
      },
      {
        id: 34,
        categoryId: 9,
        title: 'İstediğin Bir Şey Olursa Bir Hayır Olmazsa Bin ...',
        author: 'Hakan Mengüç',
        category: 'Felsefe',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001872065001-1.jpg'
        ],
        description:
          'Description İstediğin Bir Şey Olursa Bir Hayır Olmazsa Bin ...',
      },
      {
        id: 35,
        categoryId: 9,
        title: 'Çürümenin Kitabı',
        author: 'Emil Michel Cioran',
        category: 'Felsefe',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000077396-1.jpg'
        ],
        description: 'Description Çürümenin Kitabı...',
      },
      {
        id: 36,
        categoryId: 9,
        title: 'İrade Terbiyesi',
        author: 'Jules Payot',
        category: 'Felsefe',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001858951001-1.jpg'
        ],
        description: 'Description İrade Terbiyesi...',
      },
      // Çizgi Roman
      {
        id: 37,
        categoryId: 10,
        title: 'Brutal Cilt - 1',
        author: 'Kei Koga',
        category: 'Çizgi Roman',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002051712001-1.jpg'
        ],
        description: 'Description Brutal Cilt - 1...',
      },
      {
        id: 38,
        categoryId: 10,
        title: 'Brutal Cilt - 2',
        author: 'Kei Koga',
        category: 'Çizgi Roman',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002051713001-1.jpg'
        ],
        description: 'Description Brutal Cilt - 2 ...',
      },
      {
        id: 39,
        categoryId: 10,
        title: 'Zagor +4 Uğuldayan Sular',
        author: 'Luca Barbieri',
        category: 'Çizgi Roman',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002056278001-1.jpg'
        ],
        description: 'Description Zagor +4 Uğuldayan Sular...',
      },
      {
        id: 40,
        categoryId: 10,
        title: 'Masallar Cilt 12 - Karanlık Çağlar',
        author: 'Kolektif',
        category: 'Çizgi Roman',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002065224001-1.jpg'
        ],
        description: 'Description Masallar Cilt 12 - Karanlık Çağlar...',
      },
      // Bilim
      {
        id: 41,
        categoryId: 11,
        title: 'Dünyanın En Yalnız Beyni',
        author: 'Serkan Karaismailoğlu',
        category: 'Bilim',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002062778001-1.jpg'
        ],
        description: 'Description Dünyanın En Yalnız Beyni...',
      },
      {
        id: 42,
        categoryId: 11,
        title: 'Bilgiyle Sohbet',
        author: 'A. M. Celal Şengör',
        category: 'Bilim',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000577576-1.jpg'
        ],
        description: 'Description Bilgiyle Sohbet...',
      },
      {
        id: 43,
        categoryId: 11,
        title: 'Çalınan Dikkat - Neden Odaklanamıyoruz?',
        author: 'Johann Hari',
        category: 'Bilim',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002011754001-1.jpg'
        ],
        description: 'Description Çalınan Dikkat - Neden Odaklanamıyoruz?...',
      },
      {
        id: 44,
        categoryId: 11,
        title: 'İFA: İnsanın Fabrika Ayarları - 3 Kitap Birarad...',
        author: 'Sinan Canan',
        category: 'Bilim',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002003609001-1.jpg'
        ],
        description:
          'Description İFA: İnsanın Fabrika Ayarları - 3 Kitap Birarad...',
      },
      // Mizah
      {
        id: 45,
        categoryId: 12,
        title: 'Şimdiki Çocuklar Harika',
        author: 'Aziz Nesin',
        category: 'Mizah',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000193784-1.jpg'
        ],
        description: 'Description Şimdiki Çocuklar Harika...',
      },
      {
        id: 46,
        categoryId: 12,
        title: 'Yaşar Ne Yaşar Ne Yaşamaz',
        author: 'Aziz Nesin',
        category: 'Mizah',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000187061-1.jpg'
        ],
        description: 'Description Yaşar Ne Yaşar Ne Yaşamaz...',
      },
      {
        id: 47,
        categoryId: 12,
        title: 'Sıdıka',
        author: 'Atilla Atalay',
        category: 'Mizah',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000061905-1.jpg'
        ],
        description: 'Description Sıdıka...',
      },
      {
        id: 48,
        categoryId: 12,
        title: 'Buradan Seviniz',
        author: 'Mert Dolapçıoğlu',
        category: 'Mizah',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001962791001-1.jpg'
        ],
        description: 'Description Buradan Seviniz...',
      },
      // Mitoloji Efsane
      {
        id: 49,
        categoryId: 13,
        title: 'Kadın Kahramanın Yolculuğu',
        author: 'Maureen Murdock',
        category: 'Mitoloji Efsane',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0001979207001-1.jpg'
        ],
        description: 'Description Kadın Kahramanın Yolculuğu...',
      },
      {
        id: 50,
        categoryId: 13,
        title: 'Rune Tılsımlar Kitabı',
        author: 'Suna Çakmak',
        category: 'Mitoloji Efsane',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002058292001-1.jpg'
        ],
        description: 'Description Rune Tılsımlar Kitabı...',
      },
      {
        id: 51,
        categoryId: 13,
        title: 'Mitoloji 101',
        author: 'Kathleen Sears',
        category: 'Mitoloji Efsane',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0000000624030-1.jpg'
        ],
        description: 'Description Mitoloji 101...',
      },
      {
        id: 52,
        categoryId: 13,
        title: 'Tanrıların Çağrısı: Dionysos - Bize Ne Mesaj Ve...',
        author: 'Erhan Altunay',
        category: 'Mitoloji Efsane',
        coverImageUrl: [
          'https://i.dr.com.tr/cache/154x170-0/originals/0002022666001-1.jpg'
        ],
        description:
          'Description Tanrıların Çağrısı: Dionysos - Bize Ne Mesaj Ve......',
      }
    ];

    return {
      book: books,
      category: categories
    };
  }
}
