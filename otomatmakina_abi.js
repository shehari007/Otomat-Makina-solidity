var otomatmakina = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "urun_num",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "alma_sayi",
				"type": "uint256"
			}
		],
		"name": "satinAl",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_urunAdi",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_urunStok",
				"type": "uint256"
			}
		],
		"name": "urun_ekle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "urun_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stok_sayi",
				"type": "uint256"
			}
		],
		"name": "urun_stok_ekle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toplam_urun_sayisi",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "urun_no",
				"type": "uint256"
			}
		],
		"name": "urun_isim",
		"outputs": [
			{
				"internalType": "string",
				"name": "urun_adi",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "urun_listler",
		"outputs": [
			{
				"internalType": "string",
				"name": "urun",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "urun_stok",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "urun_stok_id",
				"type": "uint256"
			}
		],
		"name": "urun_stok",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "urun_stok_no",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]