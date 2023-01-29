using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Test01
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] events = new string[] { "Alex sleep 00.00 08.00", "Sam sleep 07.00 13.00", "Alex lunch 12.30 13.59" };
            List<string> list = events.ToList();
            getEarliestMeetTime(list, 30);
        }
        public static string getEarliestMeetTime(List<string> events, int k)
        {
            string[] personEntry = events.ToArray();
            foreach (var pEntry in personEntry)
            {
                string[] sentry = pEntry.Split(null);
                BusyTime busyTime = new BusyTime(sentry[0], sentry[2], sentry[3]);

            }


            return "-1";
        }
        class BusyTime
        {
            public string personName;
            public string startTime;
            public string endTime;
            public BusyTime(string personame, string startTime, string endTime)
            {
                this.personName = personame;
                this.startTime = startTime;
                this.endTime = endTime;
            }

        }
        private static void Problem2()
        {
            List<List<string>> products = new List<List<string>>();
            List<string> item1 = new List<string> { "10", "d0", "d1" };
            List<string> item2 = new List<string> { "15", "EMPTY", "EMPTY" };
            List<string> item3 = new List<string> { "20", "d1", "EMPTY" };

            products.Add(item1);
            products.Add(item2);
            products.Add(item3);
            List<List<string>> discounts = new List<List<string>>();
            List<string> d1 = new List<string> { "d0", "1", "27" };
            List<string> d2 = new List<string> { "d1", "2", "5" };
            discounts.Add(d1);
            discounts.Add(d2);
            int result = Result.findLowestPrice(products, discounts);
            Console.WriteLine(result);
            //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

            //int productsRows = Convert.ToInt32(Console.ReadLine().Trim());
            //int productsColumns = Convert.ToInt32(Console.ReadLine().Trim());

            //List<List<string>> products = new List<List<string>>();

            //for (int i = 0; i < productsRows; i++)
            //{
            //    products.Add(Console.ReadLine().TrimEnd().Split(' ').ToList());
            //}

            //int discountsRows = Convert.ToInt32(Console.ReadLine().Trim());
            //int discountsColumns = Convert.ToInt32(Console.ReadLine().Trim());

            //List<List<string>> discounts = new List<List<string>>();

            //for (int i = 0; i < discountsRows; i++)
            //{
            //    discounts.Add(Console.ReadLine().TrimEnd().Split(' ').ToList());
            //}

            //int result = Result.findLowestPrice(products, discounts);

            //textWriter.WriteLine(result);

            //textWriter.Flush();
            //textWriter.Close();
        }
    }

    class Result
    {

        /*
         * Complete the 'findLowestPrice' function below.
         *
         * The function is expected to return an INTEGER.
         * The function accepts following parameters:
         *  1. 2D_STRING_ARRAY products
         *  2. 2D_STRING_ARRAY discounts
         */

        public static int findLowestPrice(List<List<string>> products, List<List<string>> discounts)
        {
            int result = 0;
            Dictionary<string, Discount> productDiscount = new Dictionary<string, Discount>();
            foreach (var discount in discounts)
            {
                string[] d = discount.ToArray();
                int type = int.Parse(d[1]);
                int value = int.Parse(d[2]);
                productDiscount.Add(d[0], new Discount(d[0], type, value));
            }

            foreach (var product in products)
            {
                int price = int.Parse(product[0]);
                int min = price;
                for (int i = 0; i < product.Count; i++)
                {
                    int currentPrice = price;
                    string index = product[i];
                    if (!string.Equals(index, "EMPTY", StringComparison.OrdinalIgnoreCase))
                    {
                        if (productDiscount.ContainsKey(index))
                        {
                            Discount discount = productDiscount[index];
                            if (discount.Type == 0)
                            {
                                currentPrice = discount.Value;
                            }
                            else if (discount.Type == 1)
                            {
                                currentPrice = (int)Math.Round(currentPrice * (100.0 - discount.Value) / 100);
                            }
                            else if (discount.Type == 2)
                            {
                                currentPrice -= discount.Value;
                            }
                            min = Math.Min(min, currentPrice);
                        }
                    }

                }
                result += min;
            }
            return result;
        }

    }

    class Discount
    {
        public string Index;
        public int Type;
        public int Value;
        public Discount(string index, int type, int value)
        {
            this.Index = index;
            this.Type = type;
            this.Value = value;
        }
    }
}
